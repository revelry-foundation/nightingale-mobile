function traverseEctoErrors(errors: {[x: string]: any}) {
  Object.keys(errors).map(key => {
    if (errors[key][0]) {
      throw {title: key, message: errors[key][0]}
    } else {
      traverseEctoErrors(errors[key])
    }
  })
}

async function get(url: RequestInfo, access_token: string) {
  const headers = {}
  headers['Accept'] = 'application/json'
  headers['Content-Type'] = headers['Accept']
  if (access_token) {
    headers['Authorization'] = `Bearer ${access_token}`
  }

  let resp = await fetch(url, {
    method: 'GET',
    headers: headers,
  })

  const results = await resp.json()

  return results
}

async function post(url: RequestInfo, access_token: string, body: any) {
  const headers = {}
  headers['Accept'] = 'application/json'
  headers['Content-Type'] = headers['Accept']
  if (access_token) {
    headers['Authorization'] = `Bearer ${access_token}`
  }

  const resp = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })

  const results = await resp.json()

  if (results.errors && !results.errors.http) {
    traverseEctoErrors(results.errors)
  }

  return results
}

async function put(url: RequestInfo, access_token: string, body: any) {
  const headers = {}
  headers['Accept'] = 'application/json'
  headers['Content-Type'] = headers['Accept']
  if (access_token) {
    headers['Authorization'] = `Bearer ${access_token}`
  }

  const resp = await fetch(url, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(body),
  })

  const results = await resp.json()

  if (results.errors) {
    traverseEctoErrors(results.errors)
  }

  return results
}

export {get, put, post, traverseEctoErrors}
