import GeocoderService from './geocoder'

const mockGeocode = {
  street: 'street',
  adminArea6: 'adminArea6',
  adminArea5: 'adminArea5',
  adminArea3: 'adminArea3',
  adminArea1: 'adminArea1',
  geocodeQuality: 'TYPE',
  latLng: { lat: 1, lng: 2 },
}

fetch.mockResponse(
  JSON.stringify({
    results: [
      {
        locations: [mockGeocode, mockGeocode],
      },
    ],
  })
)

describe('Geocode Service', () => {
  describe('getGeocode method', () => {
    const mockQuery = 'Rua 42'
    it('should fetch the correct URL', async () => {
      const expectedUrl =
        'http://www.mapquestapi.com/geocoding/v1/address?key=lgNnGzsAiWUFzmixA02M5LGC4Nk78OqU&location=Rua+42'
      await GeocoderService.getGeocode(mockQuery)
      expect(fetch).toHaveBeenCalledWith(expectedUrl)
    })

    it('should handle the response correctly', async () => {
      const expectedGeocode = {
        street: mockGeocode.street,
        neighborhood: mockGeocode.adminArea6,
        city: mockGeocode.adminArea5,
        county: mockGeocode.adminArea5,
        state: mockGeocode.adminArea3,
        country: mockGeocode.adminArea1,
        type: 'type',
        latLng: mockGeocode.latLng,
      }
      const expectedResult = [expectedGeocode, expectedGeocode]

      const result = await GeocoderService.getGeocode(mockQuery)

      expect(result).toStrictEqual(expectedResult)
    })
  })
})
