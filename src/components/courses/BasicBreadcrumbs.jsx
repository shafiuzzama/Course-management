// import * as React from 'react'
// import Typography from '@mui/material/Typography'
// import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link'

// function handleClick(event) {
//   event.preventDefault()
//   console.info('You clicked a breadcrumb.')
// }

// export default function BasicBreadcrumbs() {
//   return (
//     <div role="presentation" onClick={handleClick}>
//       <Breadcrumbs
//         aria-label="breadcrumb"
//         separator="›"
//         sx={{ fontSize: '12px', fontFamily: 'Open Sans', color: '#252D41' }}
//       >
//         <Link underline="hover" color="inherit" href="/">
//           AllCourses
//         </Link>
//         <Link
//           underline="hover"
//           color="inherit"
//           href="/material-ui/getting-started/installation/"
//         >
//           Python
//         </Link>
//         <Typography sx={{ fontSize: '12px' }} color="text.primary">
//           Java
//         </Typography>
//       </Breadcrumbs>
//     </div>
//   )
// }

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      janmenjaya
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      // onClick={handleClick}
    >
      kanha
    </Link>,
    <Typography key="3" color="text.primary">
      biswal
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
