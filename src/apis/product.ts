
export const apiData = {
    getListData: (year:string, team:string, person:string, result:string) => `/en/results/jcr:content/resultsarchive.html/${year}/${team}${person ? "" : ".html"}${person && `/${person}${result ? "" : ".html"}`}${result ? `/${result}.html` : ""}`
}
