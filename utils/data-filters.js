export const filterBeerData = (data = []) => {
  const filtered = [];

  data?.forEach(beer => {
    const centennial = beer?.ingredients?.hops?.find(({name}) => name === 'Centennial');

    if(!centennial) {
      const b = {
        name: beer.name,
        tagLine: beer.tagline,
        desc: beer.description,
        img: beer.image_url,
        abv: beer.abv,
        ibu: beer.ibu,
        lactose: false,
        dryHop: false
      }

      for(const hop of beer?.ingredients?.hops) {
        if(!b.lactose && hop.name === 'Lactose') {
          b.lactose = true
        }
        if(!b.dryHop && hop.add === 'dry hop') {
          b.dryHop = true
        }
      }

      filtered.push(b)
    }
    
  });

  // sorting by abv in ascending
  filtered?.sort((b1, b2) => {
    if(b1.abv > b2.abv) {
      return 1
    }
    if(b1.abv < b2.abv) {
      return -1
    }
    return 0
  })
  // console.log(filtered)
  return filtered || [];
}