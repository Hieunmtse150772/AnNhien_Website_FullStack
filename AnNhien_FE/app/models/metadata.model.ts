type metadata = {
    totalDocs: number,
    totalPages: number,
    lastPage: number,
    count: number,
    currentPage: {
      page: number,
      limit: number
    }
}
export default metadata;