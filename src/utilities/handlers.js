import { baseUrl } from "../constants/BaseUrl";

export async function fetchSchoolsByLga(selectedLga) {
  const response = await fetch(
    `${baseUrl}/school/by-lga?lgaValue=${selectedLga}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const { result } = await response.json();
  return result;
}

export function handleSelectBlur(e) {
  e.target.value = "";
  e.target.blur();
}
