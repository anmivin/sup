import { AvatarModel } from '@back/user/models/avatars.model';
import { PackModel } from '@back/user/models/packs.model';
import { UserModel } from '@back/user/models/users.model';
import { InputUserDto, EditUserDto } from '@back/user/user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import { v4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private userModel: typeof UserModel,
    @InjectModel(AvatarModel) private avatarModel: typeof AvatarModel,
    @InjectModel(PackModel) private packModel: typeof PackModel,
  ) {}

  async findUser(name: string) {
    const existingUser = await this.userModel.findOne({ where: { name } });
    if (!existingUser) throw new NotFoundException('Пользователь не найден');
    return existingUser;
  }

  async findUserByEmail(email: string) {
    return await this.userModel.findOne({ where: { email } });
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
    const salt = (await bcrypt.genSalt()) as string;
    const dbpass = createUserDto.password
      ? ((await bcrypt.hash(createUserDto.password, salt)) as string)
      : null;
    /*     await this.throwIfDublecate({ name: createUserDto.name, email: createUserDto.email }); */

    const newUser = await this.userModel.create({
      id: v4(),
      name: createUserDto.name,
      password: dbpass,
      email: createUserDto.email,
      type: type ?? 'local',
    });

    return newUser;
  }
}
