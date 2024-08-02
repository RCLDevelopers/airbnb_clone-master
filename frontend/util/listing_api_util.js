
export const fetchListings = (filters) => {
  return $.ajax({
    method: "GET",
    url: `/api/listings?bounds=${JSON.stringify(filters.bounds)}`
  });
}

export const fetchListingsByUserId = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings?user_id=${userId}`
  })
}
export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
  });
}

export const createListing = listing => {
  return $.ajax({
    method: 'POST',
    url: `/api/listings`,
    data: { listing }
  });
}

export const updateListing = listing => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/listings/${listing.id}`,
    data: { listing }
  });
}

export const deleteListing = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/listings/${id}`
  });
}