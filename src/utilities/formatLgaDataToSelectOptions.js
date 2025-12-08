export function formatLgaDataToSelectOptions(data) {
  return data.map((lga) => ({
    label: lga.name,
    value: lga.name,
  }));
}
