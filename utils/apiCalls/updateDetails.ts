export const updateDetails = async (data: any) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    ...data,
  });

  const requestOptions: any = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_UPDATE_DATA}`,
    requestOptions,
  );
  const resposeData = await response.json();
  return resposeData;
};
