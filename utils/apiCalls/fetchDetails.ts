export const detchDetails = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions: any = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_DATA}`,
    requestOptions,
  );
  const resposeData = await response.json();
  return resposeData;
};
