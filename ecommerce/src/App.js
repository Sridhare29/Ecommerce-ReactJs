import { Box } from '@mui/material';
import { Stack } from '@mui/system';

import Sidebar from './component/Sidebar';
import RouterPage from './component/RouterPage';
import Navigatebar from './component/Navigatebar';


function App() {

 
  return (
 
    <Box>
    
    <RouterPage/>
    
    <Stack direction={'row'} justifyContent="Left">
      
      <Sidebar sx={{ display: 'inline-flex' }}/>
     
      <Navigatebar/>
      
    {/* < Routes>
      <Route  path='/' element={<Dashboard/>} />
      <Route  path='/user' element={<User/>} />
      <Route  path='/product' element={<Product/>}/>
      <Route  path='/order' element={<Order/>}/>
      <Route  path='/setting' element={<Setting/>}/>
    </Routes> */}
    
    </Stack>

    
  </Box>
  


  );
}

export default App;