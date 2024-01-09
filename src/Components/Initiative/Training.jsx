import { React, useState, useEffect } from 'react';
import { Tab, Tabs, Box, styled, Dialog, DialogContent, DialogTitle, Typography, DialogActions, Button } from '@mui/material';
import Axios from "axios"
import BASE_URL from "../../global_vars";

export const Training = (props) => {
  
  const [upcomingGeustLectures, setUpcomingGeustLectures] = useState([]);
  const [compeletedGeustLectures, setCompeletedGeustLectures] = useState([]);

  useEffect(() => {
    Axios.get(`${BASE_URL}/initiative/guest_lectures`).then(
      (response) => {
        console.log(response.data.upcoming_sessions)
        setUpcomingGeustLectures(response.data.upcoming_sessions)
        setCompeletedGeustLectures(response.data._sessions)
      }
    ).catch((error) => console.log(error))
  }, [])
  

  const traning_tabs = [
    {
      id: 1,
      title: 'Guest Lectures',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, amet.',
      List: [
        {
          upcoming: {
            title: 'Upcoming Sessions:',
            lists: upcomingGeustLectures,
          }
        },
      ],
    }
  ];

  const CustomizedTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    fontSize: theme.typography.pxToRem(15),
    minWidth: 'auto',
    margin: '0 5px',
    '&:focus': {
      opacity: 1,
    },
  }));

  const [value, setValue] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box borderBottom="1px solid #e8e8e8" mb={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          
        >
          {traning_tabs.map((category) => (
            <CustomizedTab label={category.title} key={category.id} />
          ))}
        </Tabs>
      </Box>
      </div>

      {traning_tabs.map((category, index) => (
        <div key={category.id} hidden={value !== index} className="category-container">
          {category.List[0].reg && category.List[0].reg.lists.length > 0 && (
            <div className="lecture-container">
              <div className="logo_color">{category.List[0].reg.title}</div>
              <div className="Init_tra_image-container">
                {category.List[0].reg.lists.map((listItem) => (
                  <img
                    key={listItem.id}
                    src={listItem.img}
                    alt={`Image ${listItem.id}`}
                    onClick={() => handleImageClick(listItem.img)}
                  />
                ))}
              </div>
            </div>
        )}

    {category.List[0].upcoming && category.List[0].upcoming.lists.length > 0 && (
      <div className="lecture-container">
        <div className="logo_color">{category.List[0].upcoming.title}</div>
        <div className="Init_tra_image-container">
          {category.List[0].upcoming.lists.map((listItem) => (
            <img
              key={listItem.id}
              src={listItem.imgurl}
              alt={`Image ${listItem.id}`}
              onClick={() => handleImageClick(listItem.imgurl)}
            />
          ))}
        </div>
      </div>
    )}

    {category.List[0].prev && category.List[0].prev.lists.length > 0 && (
      <div className="lecture-container">
        <div className="logo_color">{category.List[0].prev.title}</div>
        <div className="Init_tra_image-container">
          {category.List[0].prev.lists.map((listItem) => (
            <img
              key={listItem.id}
              src={listItem.img}
              alt={`Image ${listItem.id}`}
              onClick={() => handleImageClick(listItem.img)}
            />
          ))}
        </div>
      </div>
    )}
  </div>
))}


      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle style={{ textAlign: 'center', paddingBottom: 0 }}>
          <Typography variant="h6">{traning_tabs[value].title}</Typography>
        </DialogTitle>
        <DialogContent>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
        </DialogContent>
        <DialogActions style={{ padding: '8px', justifyContent: 'center' }}>
          <Button
            onClick={handleCloseDialog}
            style={{ width: '100%', backgroundColor: '#1D617A', color: '#fff' }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
