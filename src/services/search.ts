const axios = require("axios");

export async function getProducts(workspace: string): Promise<void> {
  try {
    let url = `http://localhost:8080/https://brastemp.com.br/_v/segment/graphql/v1?workspace=${workspace}&maxAge=short&appsEtag=remove&domain=store&locale=pt-BR&operationName=productSearchV3&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22ca7a0b23be27ca53488095c67480638bf8b22a3a1b5379a4b576ed2ad770333e%22%2C%22sender%22%3A%22vtex.store-resources%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJoaWRlVW5hdmFpbGFibGVJdGVtcyI6ZmFsc2UsInNrdXNGaWx0ZXIiOiJBTEwiLCJzaW11bGF0aW9uQmVoYXZpb3IiOiJkZWZhdWx0IiwiaW5zdGFsbG1lbnRDcml0ZXJpYSI6IkFMTCIsInByb2R1Y3RPcmlnaW5WdGV4IjpmYWxzZSwibWFwIjoiYyxjIiwicXVlcnkiOiJlbGV0cm9kb21lc3RpY29zL2ZyZWV6ZXIiLCJvcmRlckJ5IjoiIiwiZnJvbSI6MCwidG8iOjgsInNlbGVjdGVkRmFjZXRzIjpbeyJrZXkiOiJjIiwidmFsdWUiOiJlbGV0cm9kb21lc3RpY29zIn0seyJrZXkiOiJjIiwidmFsdWUiOiJmcmVlemVyIn1dLCJmYWNldHNCZWhhdmlvciI6IlN0YXRpYyIsImNhdGVnb3J5VHJlZUJlaGF2aW9yIjoiZGVmYXVsdCIsIndpdGhGYWNldHMiOmZhbHNlfQ%3D%3D%22%7D&subid1=20210702-1216-4850-a059-24f4fc0e4520`;
    const response = await axios.get(url).then(function (products: any) {
      return products.data.data.productSearch.products;
    });
    console.log(`Store: Brastemp \n WorkSpace: ${workspace || "master"}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
