/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/handbook/achievements": {
    /** Get all achievements */
    get: operations["HandbookController_getAllAchievements"];
  };
  "/handbook/achievements/{key}": {
    /** Get achievement by key */
    get: operations["HandbookController_getAchievementById"];
  };
  "/handbook/aspirations": {
    /** Get all aspirations */
    get: operations["HandbookController_getAllAspirations"];
  };
  "/handbook/aspirations/{key}": {
    /** Get aspiration by key */
    get: operations["HandbookController_getAspirationById"];
  };
  "/handbook/careers": {
    /** Get all careers */
    get: operations["HandbookController_getAllCareers"];
  };
  "/handbook/careers/{key}": {
    /** Get career by key */
    get: operations["HandbookController_getCareerById"];
  };
  "/handbook/collections": {
    /** Get all collections */
    get: operations["HandbookController_getAllCollections"];
  };
  "/handbook/collections/{key}": {
    /** Get collection id */
    get: operations["HandbookController_getCollectionByKey"];
  };
  "/handbook/deaths": {
    /** Get all deaths */
    get: operations["HandbookController_getAllDeaths"];
  };
  "/handbook/deaths/{key}": {
    /** Get death by key */
    get: operations["HandbookController_getDeathById"];
  };
  "/handbook/fears": {
    /** Get all fears */
    get: operations["HandbookController_getAllFears"];
  };
  "/handbook/fears/{key}": {
    /** Get fear by key */
    get: operations["HandbookController_getFearById"];
  };
  "/handbook/skills": {
    /** Get all skills */
    get: operations["HandbookController_getAllSkills"];
  };
  "/handbook/skills/{key}": {
    /** Get skill by id */
    get: operations["HandbookController_getSkillById"];
  };
  "/handbook/traits": {
    /** Get all traits */
    get: operations["HandbookController_getAllTraits"];
  };
  "/handbook/traits/{key}": {
    /** Get trait by key */
    get: operations["HandbookController_getTraitById"];
  };
  "/tree/{id}": {
    /** Get sims for user */
    get: operations["TreeController_getSimsForUser"];
  };
  "/tree/tree/{id}": {
    /** Get sims for tree */
    get: operations["TreeController_getTreeStructure"];
  };
  "/tree/sim/{id}": {
    /** Get sim by id */
    get: operations["TreeController_getSim"];
  };
  "/tree": {
    /** Create sim */
    post: operations["TreeController_createSim"];
  };
  "/tree/tree": {
    /** Create tree */
    post: operations["TreeController_createTree"];
  };
  "/users": {
    /** Create User */
    post: operations["UsersController_createUser"];
  };
  "/worlds/{part}": {
    /** Get sims for user */
    get: operations["WorldController_getSimsForUser"];
  };
  "/worlds/map/{worldKey}": {
    /** Get sims for tree */
    get: operations["WorldController_getTreeStructure"];
  };
  "/auth/login": {
    /** Log In */
    post: operations["AuthController_login"];
  };
  "/auth/google": {
    get: operations["AuthController_googleAuth"];
  };
  "/auth/google/callback": {
    get: operations["AuthController_googleAuthRedirect"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    OutputAchievementList4Dto: {
      /** @description Achievement key */
      key: string;
      /** @description Achievement icon */
      icon: string;
    };
    OutputAchievement4Dto: {
      /** @description Achievement key */
      key: string;
      /** @description Achievement icon */
      icon: string;
      /** @description Points you get for achievement */
      points: number;
    };
    OutputAspirationList4Dto: {
      /** @description Aspiration key */
      key: string;
      /** @description Aspiration icon */
      icon: string;
      /**
       * @description Aspiration group key
       * @enum {string}
       */
      group: "aspiration_group_001_animal" | "aspiration_group_002_athletic" | "aspiration_group_003_creativity" | "aspiration_group_004_deviance" | "aspiration_group_005_family" | "aspiration_group_006_food" | "aspiration_group_007_fortune" | "aspiration_group_008_knowledge" | "aspiration_group_009_love" | "aspiration_group_010_location" | "aspiration_group_011_nature" | "aspiration_group_012_popularity" | "aspiration_group_013_starwars" | "aspiration_group_014_wellness" | "aspiration_group_015_werewolf" | "aspiration_group_016_child" | "aspiration_group_017_teen";
    };
    OutputAspiration4Dto: {
      /** @description Aspiration key */
      key: string;
      /** @description Aspiration icon */
      icon: string;
      /** @description Aspiration steps count */
      steps: number;
      /**
       * @description Aspiration group key
       * @enum {string}
       */
      group: "aspiration_group_001_animal" | "aspiration_group_002_athletic" | "aspiration_group_003_creativity" | "aspiration_group_004_deviance" | "aspiration_group_005_family" | "aspiration_group_006_food" | "aspiration_group_007_fortune" | "aspiration_group_008_knowledge" | "aspiration_group_009_love" | "aspiration_group_010_location" | "aspiration_group_011_nature" | "aspiration_group_012_popularity" | "aspiration_group_013_starwars" | "aspiration_group_014_wellness" | "aspiration_group_015_werewolf" | "aspiration_group_016_child" | "aspiration_group_017_teen";
      /** @description Bonus trait Sim gets after completing aspiration */
      bonus: string;
    };
    OutputCareerList4Dto: {
      /** @description Career key */
      key: string;
      /** @description Career icon */
      icon: string;
    };
    OutputCareer4Dto: {
      /** @description Career key */
      key: string;
      /** @description Career icon */
      icon: string;
    };
    OutputCollectionList4Dto: {
      /** @description Collection key */
      key: string;
      /** @description Amount of items */
      count: number;
    };
    OutputCollectionItemList4Dto: {
      /** @description Collection item key */
      key: string;
      /** @description Collection item icon */
      icon: string;
    };
    OutputCollection4Dto: {
      /** @description Collection key */
      key: string;
      /** @description Amount of items */
      collectionItems: components["schemas"]["OutputCollectionItemList4Dto"][];
    };
    OutputDeaths4Dto: {
      /** @description Death key */
      key: string;
      /** @description Pack key */
      packKey: string;
    };
    OutputFears4Dto: {
      /** @description Fear key */
      key: string;
      /** @description Fear icon */
      icon: string;
    };
    OutputSkillList4Dto: {
      /** @description Skill key */
      key: string;
      /** @description Skill icon */
      icon: string;
      /**
       * @description Age since which skill available
       * @enum {string}
       */
      age: "infant" | "toddler" | "child" | "teen" | "adult";
      /** @description Amount of skill steps */
      steps: number;
    };
    OutputSkill4Dto: {
      /** @description Skill key */
      key: string;
      /** @description Skill icon */
      icon: string;
      /**
       * @description Age since which skill available
       * @enum {string}
       */
      age: "infant" | "toddler" | "child" | "teen" | "adult";
      /** @description Amount of skill steps */
      steps: number;
    };
    OutputTraitList4Dto: {
      /** @description Trait key */
      key: string;
      /** @description Trait icon */
      icon: string;
      /**
       * @description Trait group key
       * @enum {string}
       */
      group: "trait_group_001_emotional" | "trait_group_002_hobby" | "trait_group_003_lifestyle" | "trait_group_004_social" | "trait_group_005_toddler" | "trait_group_006_infant" | "trait_group_007_bonus" | "trait_group_008_aspirationreward" | "Satisfaction reward" | "trait_group_010_careerreward" | "trait_group_011_foodmastery" | "trait_group_012_inherited" | "trait_group_013_charactervalue";
    };
    OutputTrait4Dto: {
      /** @description Trait key */
      key: string;
      /** @description Trait icon */
      icon: string;
      /**
       * @description Trait group key
       * @enum {string}
       */
      group: "trait_group_001_emotional" | "trait_group_002_hobby" | "trait_group_003_lifestyle" | "trait_group_004_social" | "trait_group_005_toddler" | "trait_group_006_infant" | "trait_group_007_bonus" | "trait_group_008_aspirationreward" | "Satisfaction reward" | "trait_group_010_careerreward" | "trait_group_011_foodmastery" | "trait_group_012_inherited" | "trait_group_013_charactervalue";
    };
    EdgesDto: {
      /** @description Edge id */
      id: string;
      /** @description Edge source */
      source: string;
      /** @description Edge target */
      target: string;
      /** @description Edge source handle position */
      sourceHandle: Record<string, unknown> | null;
      /** @description Edge target handle position */
      targetHandle: Record<string, unknown> | null;
      /** @description Is edge hidden */
      hidden: boolean | null;
    };
    XYPosition: {
      /** @description X position */
      x: number;
      /** @description Y position */
      y: number;
    };
    NodeDataDto: {
      /** @description Sim id */
      id: string;
      /** @description Sim name */
      name: string;
      /** @description Sim image */
      image: string;
      /** @description Fixed node Y position */
      fixedY: number;
    };
    NodesDto: {
      /** @description Node id */
      id: string;
      /** @description Node position */
      position: components["schemas"]["XYPosition"];
      /** @description Node type */
      type: string;
      /** @description Is node hidden */
      hidden: boolean | null;
      /** @description Is node draggable */
      draggable: boolean | null;
      /** @description Edges */
      data: components["schemas"]["NodeDataDto"];
    };
    OutputTreeDto: {
      /** @description Edges */
      edges: components["schemas"]["EdgesDto"][];
      /** @description Nodes */
      nodes: components["schemas"]["NodesDto"][];
    };
    InputSimDto: {
      /** @description User id */
      userId: string;
      /** @description Sim name */
      name: string;
      /** @description Sim image */
      image: string;
      /** @description Tree id */
      treeId: string;
      /** @description Game part */
      part: string;
      /** @description Sim birth year */
      birthYear: number | null;
      /** @description Sim death year */
      deathYear: number | null;
      /** @description First parent id */
      parentFirstId: string | null;
      /** @description Second parent id */
      parentSecondId: string | null;
      /** @description Children ids */
      childIds: string[];
      /** @description Partners ids */
      partnersIds: string[];
    };
    InputTreeDto: {
      /** @description User id */
      userId: string;
      /** @description Tree name */
      name: string;
      /** @description Tree image */
      image: string;
    };
    InputUserDto: {
      /** @description User name */
      name: string;
      /** @description User password */
      password: Record<string, unknown> | null;
      /** @description User email */
      email: Record<string, unknown> | null;
      /** @description User avatar */
      avatar: Record<string, unknown> | null;
    };
    OutputWorldDto: {
      key: string;
      icon: string;
    };
    OutputLotDto: {
      key: string;
      filledImage: string;
      emptyImage: string;
      priceFilled: number;
      priceEmpty: number;
      size: string;
      coordinates: string;
    };
    OutputNeighbourhoodDto: {
      key: string;
      icon: string;
    };
    OutputWorldMapDto: {
      filledMap: string;
      emptyMap: string;
      neighbourhoods: components["schemas"]["OutputNeighbourhoodDto"][];
      lots: components["schemas"]["OutputLotDto"][];
    };
    UserCredentials: {
      /** @description User name */
      name: string;
      /** @description User password */
      password: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** Get all achievements */
  HandbookController_getAllAchievements: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputAchievementList4Dto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get achievement by key */
  HandbookController_getAchievementById: {
    parameters: {
      path: {
        /** @description Achievement key */
        key: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputAchievement4Dto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get all aspirations */
  HandbookController_getAllAspirations: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputAspirationList4Dto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get aspiration by key */
  HandbookController_getAspirationById: {
    parameters: {
      path: {
        /** @description Aspiration id */
        key: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputAspiration4Dto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get all careers */
  HandbookController_getAllCareers: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputCareerList4Dto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get career by key */
  HandbookController_getCareerById: {
    parameters: {
      path: {
        /** @description Career key */
        key: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputCareer4Dto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get all collections */
  HandbookController_getAllCollections: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputCollectionList4Dto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get collection id */
  HandbookController_getCollectionByKey: {
    parameters: {
      path: {
        /** @description Collection id */
        key: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputCollection4Dto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get all deaths */
  HandbookController_getAllDeaths: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputDeaths4Dto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get death by key */
  HandbookController_getDeathById: {
    parameters: {
      path: {
        /** @description Death key */
        key: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputDeaths4Dto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get all fears */
  HandbookController_getAllFears: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputFears4Dto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get fear by key */
  HandbookController_getFearById: {
    parameters: {
      path: {
        /** @description Fear key */
        key: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputFears4Dto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get all skills */
  HandbookController_getAllSkills: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputSkillList4Dto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get skill by id */
  HandbookController_getSkillById: {
    parameters: {
      path: {
        /** @description Skill key */
        key: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputSkill4Dto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get all traits */
  HandbookController_getAllTraits: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputTraitList4Dto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get trait by key */
  HandbookController_getTraitById: {
    parameters: {
      path: {
        /** @description Trait key */
        key: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputTrait4Dto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get sims for user */
  TreeController_getSimsForUser: {
    parameters: {
      path: {
        /** @description User id */
        id: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get sims for tree */
  TreeController_getTreeStructure: {
    parameters: {
      path: {
        /** @description Tree id */
        id: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputTreeDto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get sim by id */
  TreeController_getSim: {
    parameters: {
      path: {
        /** @description Sim id */
        id: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputTreeDto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Create sim */
  TreeController_createSim: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["InputSimDto"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Create tree */
  TreeController_createTree: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["InputTreeDto"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Create User */
  UsersController_createUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["InputUserDto"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get sims for user */
  WorldController_getSimsForUser: {
    parameters: {
      path: {
        /** @description Part */
        part: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputWorldDto"][];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Get sims for tree */
  WorldController_getTreeStructure: {
    parameters: {
      path: {
        /** @description Tree id */
        worldKey: string;
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["OutputWorldMapDto"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  /** Log In */
  AuthController_login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserCredentials"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
      /** @description Not found */
      404: {
        content: never;
      };
    };
  };
  AuthController_googleAuth: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  AuthController_googleAuthRedirect: {
    responses: {
      200: {
        content: never;
      };
    };
  };
}
