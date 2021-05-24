import MSite from '@/pages/msite/MSite'
import Order from '@/pages/order/Order'
import Search from '@/pages/search/Search'
import Profile from '@/pages/profile/Profile'

export default [
    {
      path: '',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/profile',
      component: Profile
    }
]
