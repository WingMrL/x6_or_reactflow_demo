
export enum ELevel {
  Compony = 'company',
  BU = 'bu',
  ProductTeam = 'product_team',
  ProjectTeam = 'project_team',
  Post = 'post',
  Person = 'person',
}

export const ECardColor = {
  [ELevel.Compony]: '#63c2d0',
  [ELevel.BU]: '#fff',
  [ELevel.ProductTeam]: '#e9a844',
  [ELevel.ProjectTeam]: '#4481f6',
  [ELevel.Post]: '#ec7773',
  [ELevel.Person]: '#fff',
}

export const ECardTextColor = {
  [ELevel.Compony]: '#fff',
  [ELevel.BU]: '#63c2d0',
  [ELevel.ProductTeam]: '#fff',
  [ELevel.ProjectTeam]: '#fff',
  [ELevel.Post]: '#fff',
  [ELevel.Person]: '#666',
}

export interface SourceDataItem {
  id: string;
  label: string;
  owner: string;
  level: ELevel;
  children?: SourceDataItem[];
}

const personMockData: SourceDataItem = {
  id: 'personId',
  label: '前端开发',
  owner: '张三',
  level: ELevel.Person,
}

const PERSON_MOCK_COUNT = [1,2,3,4,5,6];

const personMockDatas: SourceDataItem[] = PERSON_MOCK_COUNT.map(v => {
  return {
    ...personMockData,
    id: `${personMockData.id}_${v}`,
    owner: `${personMockData.owner}_${v}`,
  }
});

const postMockData: SourceDataItem = {
  id: 'postId',
  label: '前端小组',
  owner: '李四',
  level: ELevel.Post,
};

const POST_MOCK_COUNT = [1,2,3,4];

const postMockDatas: SourceDataItem[] = POST_MOCK_COUNT.map(v => {
  return {
    ...postMockData,
    id: `${postMockData.id}_${v}`,
    owner: `${postMockData.owner}_${v}`,
    children: personMockDatas,
  }
});

const projectTeamMockData: SourceDataItem = {
  id: 'projectId',
  label: '项目小组',
  owner: '龙五',
  level: ELevel.ProjectTeam,
};

const PROJECT_TEAM_MOCK_COUNT = [1,2,3,4,5];

const projectTeamMockDatas: SourceDataItem[] = PROJECT_TEAM_MOCK_COUNT.map(v => {
  return {
    ...projectTeamMockData,
    id: `${projectTeamMockData.id}_${v}`,
    owner: `${projectTeamMockData.owner}_${v}`,
    children: postMockDatas,
  }
});

const productTeamMockData: SourceDataItem = {
  id: 'productId',
  label: '产品小组',
  owner: '老六',
  level: ELevel.ProductTeam,
};

const PRODUCT_TEAM_MOCK_COUNT = [1,2,3,4,5];

const productTeamMockDatas: SourceDataItem[] = PRODUCT_TEAM_MOCK_COUNT.map(v => {
  return {
    ...productTeamMockData,
    id: `${productTeamMockData.id}_${v}`,
    owner: `${productTeamMockData.owner}_${v}`,
    children: projectTeamMockDatas,
  }
});

const buMockData: SourceDataItem = {
  id: 'buId',
  label: 'BU',
  owner: '洪七',
  level: ELevel.BU,
};

const BU_MOCK_COUNT = [1,2,3,4];

const buMockDatas: SourceDataItem[] = BU_MOCK_COUNT.map(v => {
  return {
    ...buMockData,
    id: `${buMockData.id}_${v}`,
    owner: `${buMockData.owner}_${v}`,
    children: productTeamMockDatas,
  }
});

export const sourceData: SourceDataItem[] = [
  {
    id: 'companyId',
    label: '深圳总部',
    owner: '深圳',
    level: ELevel.Compony,
    children: buMockDatas
  }
]