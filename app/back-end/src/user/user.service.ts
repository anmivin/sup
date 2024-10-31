import { AvatarModel } from '@back/user/models/avatars.model';
import { PackModel } from '@back/user/models/packs.model';
import { UserModel } from '@back/user/models/users.model';
import { InputUserDto, EditUserDto } from '@back/user/user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import { v4 } from 'uuid';
import { I18nContext, I18nService } from 'nestjs-i18n';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private userModel: typeof UserModel,
    @InjectModel(AvatarModel) private avatarModel: typeof AvatarModel,
    @InjectModel(PackModel) private packModel: typeof PackModel,
    private readonly i18n: I18nService,
  ) {}

  async findUser(name: string) {
    const existingUser = await this.userModel.findOne({ where: { name } });
    if (!existingUser)
      throw new NotFoundException(
        `${this.i18n.t('exceptions.user', { lang: I18nContext.current()?.lang })} ${this.i18n.t('exceptions.notfound.masculine', { lang: I18nContext.current()?.lang })}`,
      );
    return existingUser;
  }

  async findUserByEmail(email: string) {
    return await this.userModel.findOne({ where: { email } });
  }

  async findUserById(id: string) {
    const existingUser = await this.userModel.findOne({ where: { id } });
    if (!existingUser)
      throw new NotFoundException(
        `${this.i18n.t('exceptions.user', { lang: I18nContext.current()?.lang })} ${this.i18n.t('exceptions.notfound.masculine', { lang: I18nContext.current()?.lang })}`,
      );
    return existingUser;
  }

  async throwIfDublecate(editUserDto: EditUserDto) {
    const duplicateUsername = await this.userModel.findOne({
      where: {
        name: editUserDto.name,
        id: editUserDto.id ? { [Op.ne]: editUserDto.id } : {},
      },
    });
    const duplicateEmail = await this.userModel.findOne({
      where: {
        email: editUserDto.email,
        id: editUserDto.id ? { [Op.ne]: editUserDto.id } : {},
      },
    });
    if (duplicateUsername || (editUserDto.email?.length && duplicateEmail))
      throw new Error(
        `Указанный ${duplicateUsername ? 'юзернейм' : 'емейл'} уже существует`,
      );
  }

  async createUser(createUserDto: InputUserDto, type?: 'local' | 'google') {
    const dbpass = createUserDto.password
      ? ((await bcrypt.hash(createUserDto.password, 8)) as string)
      : null;
    /*     await this.throwIfDublecate({ name: createUserDto.name, email: createUserDto.email }); */

    const newUser = await this.userModel.create({
      id: v4(),
      name: createUserDto.name,
      password: dbpass,
      email: createUserDto.email,
      type: type ?? 'local',
      role: 'simple',
    });

    return newUser;
  }

  async editUser(editUserDto: EditUserDto) {
    const existingUser = await this.userModel.findOne({
      where: { id: editUserDto.id },
    });
    if (!existingUser)
      throw new NotFoundException(
        `${this.i18n.t('exceptions.user', { lang: I18nContext.current()?.lang })} ${this.i18n.t('exceptions.notfound.masculine', { lang: I18nContext.current()?.lang })}`,
      );

    const updated = await existingUser.update(editUserDto);

    return updated;
  }
}
