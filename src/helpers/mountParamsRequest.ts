type mountParamsRequestProps = {
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}

export function mountParamsRequest({ 
  sort = 'name',
  order = 'asc',
  page = 1,
  limit = 10 
}: mountParamsRequestProps): string {
  return `&_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`;
};