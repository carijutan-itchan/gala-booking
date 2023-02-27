export const nanoId = (prefix = "nc_") => {
  return (
    prefix +
    Date.now() +
    "_" +
    Math.floor(Math.random() * 999999999999999) +
    "_" +
    Math.floor(Math.random() * 999999999999999)
  );
}
