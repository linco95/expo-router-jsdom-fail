import { renderRouter, screen } from 'expo-router/testing-library'

describe('router', () => {
  it('should work!', () => {
    renderRouter(['index', 'directory/a', '(group)/b'], {
      initialUrl: '/directory/a',
    })

    expect(screen).toHavePathname('/directory/a')
  })
})

