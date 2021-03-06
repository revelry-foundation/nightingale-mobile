export function formatDate(raw: string | Date) {
  const date = raw instanceof Date ? raw : new Date(raw)

  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateTime(raw: string | Date) {
  const date = raw instanceof Date ? raw : new Date(raw)

  return date.toLocaleString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
  })
}
