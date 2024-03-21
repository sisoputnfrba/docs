const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const fetchJson = async (url, token = null) => {
  const res = await fetch(url, token ? { headers: new Headers({ Authorization: `Bearer ${token}` }) } : undefined);
  if (!res.ok) {
    throw { url, ...JSON.parse(await res.text()) };
  }
  return await res.json();
}

const getFulfilled = (data) => {
  const fulfilled = data.filter(res => res.status === 'fulfilled');
  if (fulfilled.length < data.length) {
    throw data.map(res => res.reason);
  }
  return fulfilled.map(res => res.value);
}

fetchJson('https://api.github.com/orgs/sisoputnfrba/teams/ayudantes/members', GITHUB_TOKEN)
  .then(data => Promise.allSettled(data.map(member => fetchJson(`https://api.github.com/users/${member.login}`, GITHUB_TOKEN))))
  .then(data => getFulfilled(data))
  .then(data => data.map(user => ({ name: user.name, github: user.login })))
  .then(console.log)
  .catch(console.error);
