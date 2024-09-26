import { SimAspirationModel } from '@back/connection.models/SimAspiration.model';
import { SimCareerModel } from '@back/connection.models/SimCareer.model';
import { SimCollectionModel } from '@back/connection.models/SimCollection.model';
import { SimPositionModel } from '@back/connection.models/SimPosition.model';
import { SimSkillModel } from '@back/connection.models/SimSkill.model';
import { SimTraitModel } from '@back/connection.models/SimTrait.model';
import { ParentChildModel } from '@back/dynasty/models/ParentChild.model';
import { PartnerPartnerModel } from '@back/dynasty/models/PartnerPartner.model';
import { SimsModel } from '@back/dynasty/models/Sim.model';
import { OutputSimListDto } from '@back/dynasty/dynasty.dto';
import { TreeModel } from '@back/dynasty/models/Tree.model';
import {
  OutputTreeDto,
  InputSimDto,
  InputTreeDto,
  SimsTreeStructure,
  SimsTreeStructureBasic,
  OutputTreeListDto,
} from '@back/dynasty/dynasty.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { cloneDeep, remove, groupBy } from 'lodash';
import { FileModel } from '@back/file/file.model';
import { v4 } from 'uuid';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { omit } from 'lodash';
@Injectable()
export class DynastyService {
  constructor(
    @InjectModel(SimsModel) private simsModel: typeof SimsModel,
    @InjectModel(TreeModel) private treeModel: typeof TreeModel,
    @InjectModel(PartnerPartnerModel)
    private partnersModel: typeof PartnerPartnerModel,
    @InjectModel(ParentChildModel)
    private childrenModel: typeof ParentChildModel,
    @InjectModel(SimAspirationModel)
    private simAspirationModel: typeof SimAspirationModel,
    @InjectModel(SimCareerModel) private simCareerModel: typeof SimCareerModel,
    @InjectModel(SimCollectionModel)
    private simCollectionModel: typeof SimCollectionModel,
    @InjectModel(SimSkillModel) private simSkillModel: typeof SimSkillModel,
    @InjectModel(SimTraitModel) private simTraitModel: typeof SimTraitModel,
    @InjectModel(SimPositionModel)
    private simPositionModel: typeof SimPositionModel,
    @InjectModel(FileModel) private fileModel: typeof FileModel,
    private readonly i18n: I18nService,
  ) {}

  async getTreesForUser(id: string): Promise<OutputTreeListDto[]> {
    const trees = await this.treeModel.findAll({
      where: { userId: id },
    });
    const treesWithIcons = await Promise.all(
      trees.map(async (tree) => {
        const icon = tree.imageId
          ? await this.fileModel.findOne({
              where: { id: tree.imageId },
            })
          : null;
        return { id: tree.id, name: tree.name, image: icon?.path ?? null };
      }),
    );

    return treesWithIcons;
  }

  async getSimsForUser(id: number): Promise<OutputSimListDto[]> {
    const sims = await this.simsModel.findAll({
      where: { userId: id },
    });
    const simsWithIcons = await Promise.all(
      sims.map(async (sim) => {
        const icon = sim.imageId
          ? await this.fileModel.findOne({
              where: { id: sim.imageId },
            })
          : null;
        return { id: sim.id, name: sim.name, image: icon?.path ?? null };
      }),
    );
    return simsWithIcons;
  }

  async getSimsForTree(id: number): Promise<SimsModel[]> {
    return await this.simsModel.findAll({
      where: { treeId: id },
      include: [
        { model: this.partnersModel, as: 'firstPartner' },
        { model: this.partnersModel, as: 'secondPartner' },
        { model: this.childrenModel, as: 'parents' },
        { model: this.childrenModel, as: 'children' },
      ],
    });
  }

  async getSimsForStructure(id: number): Promise<SimsTreeStructure[]> {
    const sims = await this.simsModel.findAll({
      where: { treeId: id },
      include: [
        { model: this.partnersModel, as: 'firstPartner' },
        { model: this.partnersModel, as: 'secondPartner' },
        { model: this.childrenModel, as: 'parents' },
        { model: this.childrenModel, as: 'children' },
      ],
    });

    return sims.map((sim) => {
      const getSimChildren = (sim: SimsModel) => {
        const children = sim.getDataValue('parents');
        const simChildrenIds = children.length
          ? children.map((parent) => parent.childId)
          : [];
        return simChildrenIds.length
          ? sims.filter((sim) => simChildrenIds.includes(sim.id))
          : [];
      };

      const getSimParents = (sim: SimsModel) => {
        const parents = sim.getDataValue('children');
        const simParentsIds = parents.length
          ? parents.map((child) => child.parentId)
          : [];
        return simParentsIds.length
          ? sims.filter((sim) => simParentsIds.includes(sim.id))
          : [];
      };
      const getSimPartners = (sim: SimsModel) => {
        const firstPartner = sim.getDataValue('partnerFirst');
        const secondPartner = sim.getDataValue('partnerSecond');

        const simPartnersIds = [
          ...(firstPartner.length
            ? firstPartner.map((partner) => partner.partnerSecondId)
            : []),
          ...(secondPartner.length
            ? secondPartner.map((partner) => partner.partnerFirstId)
            : []),
        ];

        return simPartnersIds.length
          ? sims.filter((sim) => simPartnersIds.includes(sim.id))
          : [];
      };

      return {
        id: sim.id,
        name: sim.name,
        imageId: sim.imageId,
        aspirations: sim.aspirations,
        traits: sim.traits,
        careers: sim.careers,
        collections: sim.careers,
        skills: sim.skills,
        children: getSimChildren(sim).map((child) => ({
          id: child.id,
          name: child.name,
          imageId: child.imageId,
          children: getSimChildren(child).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
          parents: getSimParents(child).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
          partners: getSimPartners(child).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
        })),
        parents: getSimParents(sim).map((parent) => ({
          id: parent.id,
          name: parent.name,
          imageId: parent.imageId,
          children: getSimChildren(parent).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
          parents: getSimParents(parent).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
          partners: getSimPartners(parent).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
        })),
        partners: getSimPartners(sim).map((partner) => ({
          id: partner.id,
          name: partner.name,
          imageId: partner.imageId,
          children: getSimChildren(partner).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
          parents: getSimParents(partner).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
          partners: getSimPartners(partner).map((item) => ({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
          })),
        })),
      };
    });
  }
  async getTreeStructure(treeId: number) {
    const treeStructure: OutputTreeDto = { edges: [], nodes: [] };
    const sims = await this.getSimsForStructure(treeId);
    const cloneLeveledArr = cloneDeep(sims);
    const partnersWithParentsInArray = (sims: SimsTreeStructure[]) => {
      return sims
        .filter(
          (sim) =>
            sim.partners.length &&
            !sim.parents.length &&
            sim.partners.some((partner) =>
              partner.parents.find((parent) =>
                sims.map(({ id }) => id).includes(parent.id),
              ),
            ),
        )
        .map(({ id }) => id);
    };
    const simsWithoutParentsInArray = (sims: SimsTreeStructure[]) =>
      sims
        .filter(
          (arr) =>
            !sims.some((item) =>
              arr.parents.map(({ id }) => id).includes(item.id),
            ),
        )
        .map(({ id }) => id);

    const leveledArray: { level: number; item: SimsTreeStructure }[] = [];

    const getLeveledTree = (sims: SimsTreeStructure[]) => {
      if (sims.length < 1) return;
      const filtred = sims.filter(
        (sim) =>
          simsWithoutParentsInArray(sims).includes(sim.id) &&
          !partnersWithParentsInArray(sims).includes(sim.id),
      );

      filtred.forEach((sim) => {
        const parentInArray = leveledArray.find((level) =>
          sim.parents.map(({ id }) => id).includes(level.item.id),
        );
        const partnersInArray = leveledArray.find((level) =>
          sim.partners.map(({ id }) => id).includes(level.item.id),
        );
        const anotherPartnersInArray = partnersInArray
          ? leveledArray.find((level) =>
              level.item.partners
                .map(({ id }) => id)
                .includes(partnersInArray.item.id),
            )
          : undefined;
        leveledArray.push({
          level: parentInArray
            ? parentInArray.level + 2
            : partnersInArray
              ? anotherPartnersInArray
                ? partnersInArray.level + 0.5
                : partnersInArray.level
              : 0,
          item: sim,
        });
        remove(sims, (array) => array.id === sim.id);
      });
      getLeveledTree(sims);
    };
    getLeveledTree(cloneLeveledArr);

    const getPosition = (
      simLevel: number,
      sim: SimsTreeStructure | SimsTreeStructureBasic,
      invisible?: boolean,
    ) => {
      let x = 0;
      let y = 0;

      const groupedByLevel = groupBy(leveledArray, 'level');
      const getFactor = (level: number, simId: string) => {
        const levelArray = groupedByLevel[level].sort((a, b) => {
          return a.item.partners.map(({ id }) => id).includes(b.item.id) ||
            a.item.parents
              .map(({ id }) => id)
              .includes(a.item.parents.map(({ id }) => id)[0]) ||
            a.item.parents
              .map(({ id }) => id)
              .includes(a.item.parents.map(({ id }) => id)[1])
            ? 1
            : -1;
        });
        if (Number.isInteger(level) && levelArray.length === 1) return 0;
        if (!Number.isInteger(level)) {
          const getSimPartners = sims.find((sim) =>
            sim.partners.map(({ id }) => id).includes(simId),
          )?.id;
          return getFactor(level - 0.5, getSimPartners!);
        }

        const chunk1 = levelArray.slice(0, levelArray.length / 2);
        const chunk2 = levelArray.slice(levelArray.length / 2);
        const indexInFirstChunk = chunk1.findIndex(
          (item) => item.item.id === simId,
        );
        const indexInSecondChunk = chunk2.findIndex(
          (item) => item.item.id === simId,
        );
        const indexInChunk =
          indexInSecondChunk === -1 ? indexInFirstChunk : indexInSecondChunk;

        return (
          (indexInChunk +
            (indexInSecondChunk === -1
              ? (levelArray.length / 2) * -1
              : levelArray.length / 2)) *
          200
        );
      };
      if (invisible) {
        y = (simLevel - 1) * 200;
        const parents = leveledArray.filter((la) =>
          sim.parents.map(({ id }) => id).includes(la.item.id),
        );
        const parentFirstPos = getFactor(
          parents[0]?.level ?? 0,
          parents[0]?.item.id ?? '',
        );
        const parentSecondPos = getFactor(
          parents[1]?.level ?? 0,
          parents[2]?.item.id ?? '',
        );

        x =
          (parentFirstPos != parentSecondPos
            ? parentFirstPos ?? parentSecondPos
            : (parentFirstPos! + parentSecondPos!) / 2) ?? 0;
      } else {
        y = simLevel * 200 + (simLevel === 0 ? 1 : 0);
        x = getFactor(simLevel, sim.id);
      }

      return { x, y };
    };
    const getInvisibleNode = (child: SimsTreeStructureBasic) => {
      const existingNode =
        treeStructure.nodes.length &&
        treeStructure.nodes.find(
          (node) =>
            node.id ===
            `invisible-first-${child.parents[0]?.id}-second-${child.parents[1]?.id ?? 'unknown'}`,
        );

      const id = existingNode
        ? existingNode.id
        : `invisible-first-${child.parents[0]?.id}-second-${child.parents[1]?.id ?? 'unknown'}`;

      if (existingNode) return { id };
      const childLevel =
        leveledArray.find((item) => item.item.id === child.id)?.level ?? 0;
      return {
        id,
        type: 'invisibleNode',
        position: getPosition(childLevel, child, true),
        data: {
          id: '',
          name: '',
          image: '',
          fixedY: getPosition(childLevel, child, true).y,
        },
      };
    };
    leveledArray.forEach((sim) => {
      treeStructure.nodes.push({
        id: sim.item.id.toString(),
        position: getPosition(sim.level, sim.item),
        type: 'simNode',
        data: {
          id: sim.item.id,
          name: sim.item.name,
          imageId: sim.item.imageId,
          fixedY: getPosition(sim.level, sim.item).y,
          /*   aspirations: sim.item.aspirations,
          traits: sim.item.traits,
          careers: sim.item.careers,
          collections: sim.item.collections,
          skills: sim.item.skills, */
        },
      });
      sim.item.children.forEach((child) => {
        const ivisibleNode = getInvisibleNode(child);
        const sourceHandle = () => {
          if (!child.parents[1]) return 'bottom';
          return child.parents[1].id === sim.item.id ? 'left' : 'right';
        };

        /*  if (ivisibleNode.data) treeStructure.nodes.push(ivisibleNode);
         */
        treeStructure.edges.push(
          {
            id: `parent-${sim.item.id.toString()}-child-${child.id.toString()}-invisible-top`,
            source: sim.item.id.toString(),
            target: ivisibleNode.id,
            sourceHandle: sourceHandle(),
            targetHandle: 'top',
          },
          {
            id: `parent-${sim.item.id.toString()}-child-${child.id.toString()}-invisible-bottom`,
            source: ivisibleNode.id,
            target: child.id.toString(),
            sourceHandle: 'bottom',
            targetHandle: 'top',
          },
        );
      });

      sim.item.partners.forEach((partner) => {
        if (
          treeStructure.edges.find(
            (edge) =>
              edge.target === sim.item.id.toString() &&
              edge.source === partner.id.toString(),
          )
        )
          return;

        treeStructure.edges.push({
          id: `first-partner-${sim.item.id.toString()}-second-partner-${partner.id.toString()}`,
          source: sim.item.id.toString(),
          target: partner.id.toString(),
          sourceHandle: 'right',
          targetHandle: 'left',
        });
      });
    });

    return treeStructure;
  }

  async getSim(simId: string) {
    const sim = await this.simsModel.findOne({
      where: { id: simId },
      include: [
        { model: this.simAspirationModel },
        { model: this.simCareerModel },
        { model: this.simCollectionModel },
        { model: this.simSkillModel },
        { model: this.simTraitModel },
      ],
    });
    if (!sim)
      throw new NotFoundException(
        `${(this.i18n.t('exceptions.sim'), { lang: I18nContext.current()?.lang })} ${(this.i18n.t('exceptions.notfound.masculine'), { lang: I18nContext.current()?.lang })}`,
      );
    return sim;
  }

  async createSim(props: InputSimDto) {
    const simId = v4();

    const partners = props.partnersIds;
    const parents: string[] = [];
    if (props.parentFirstId) parents.push(props.parentFirstId);
    if (props.parentSecondId) parents.push(props.parentSecondId);
    const children = props.childIds;
    const createdSim = await this.simsModel.create({ id: simId, ...props });
    if (partners && partners.length) {
      await Promise.all(
        partners.map(async (partner) => {
          await this.partnersModel.create({
            partnerFirstId: createdSim.id,
            partnerSecondId: partner,
            isEx: false,
            type: 'default',
          });
        }),
      );
    }
    if (parents && parents.length) {
      await Promise.all(
        parents.map(async (parent) => {
          await this.childrenModel.create({
            parentId: parent,
            childId: createdSim.id,
            type: 'default',
          });
        }),
      );
    }
    if (children && children.length) {
      await Promise.all(
        children.map(async (child) => {
          await this.childrenModel.create({
            parentId: createdSim.id,
            childId: child,
            type: 'default',
          });
        }),
      );
    }
    return simId;
  }

  async createTree(props: InputTreeDto) {
    const treeId = v4();

    const tree = await this.treeModel.create({ ...props, id: treeId });
    return tree;
  }

  async editSim(props: InputSimDto, simId: string) {
    const sim = await this.getSim(simId);
    const updateProps = omit(props, [
      'parentFirstId',
      'parentSecondId',
      'childIds',
      'partnersIds',
      'traitsIds',
      'skills',
      'aspirations',
      'careers',
      'educationsIds',
    ]);
    await sim.update(updateProps);
  }

  async editTree(props: InputSimDto, simId: string) {
    const sim = await this.getSim(simId);
    const updateProps = omit(props, [
      'parentFirstId',
      'parentSecondId',
      'childIds',
      'partnersIds',
      'traitsIds',
      'skills',
      'aspirations',
      'careers',
      'educationsIds',
    ]);
    await sim.update(updateProps);
  }
}
