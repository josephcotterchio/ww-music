export function getCurLocationByLatLng(lat, lng) {
  const endpoint = `https://maps.googleapis.com/maps/api/js?key=SECRET&libraries=places`;
  return fetch(endpoint, { mode: "cors" }).then((res) => res.json());
}
