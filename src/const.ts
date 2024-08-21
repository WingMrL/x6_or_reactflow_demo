interface SourceDataItem {
  id: string;
  label: string;
  color: string;
  children?: SourceDataItem[];
}

export const sourceData: SourceDataItem[] = [
  {
    id: '1',
    label: '深圳研发',
    color: 'blue',
    children: [
      {
        id: '1-1',
        label: '前端',
        color: 'red',
        children: [
          {
            id: '1-1-1',
            label: '前端-黄骎',
            color: 'green',
          },
          {
            id: '1-1-2',
            label: '前端-刘永乐',
            color: 'green',
          }
        ]
      },
      {
        id: '1-2',
        label: '后端',
        color: 'red',
        children: [
          {
            id: '1-2-1',
            label: '后端-张三',
            color: 'green',
          },
          {
            id: '1-2-2',
            label: '后端-李四',
            color: 'green',
          }
        ]
      }
    ]
  }
]