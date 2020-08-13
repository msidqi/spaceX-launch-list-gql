import { gql } from "@apollo/client";

export const ALL_LAUNCHES_ID_QUERY = gql`
query allLaunchesID($limit: Int!) {
  launches(limit: $limit) {
	id
  }
}
`;

export const SINGLE_LAUNCH_QUERY = gql`
query singleLaunch($id: ID!) {
  launch(id: $id) {
	details
	mission_name
	launch_success
	launch_date_local
	links {
	  flickr_images
	  article_link
	  video_link
	}
	rocket {
	  rocket_name
	  rocket_type
	  rocket {
		engines {
		  number
		  type
		  version
		}
		mass {
		  kg
		  lb
		}
	  }
	}
  }
}
`;

export const LAUNCHES = gql`
  query spacexLaunches($limit: Int!) {
    launches(limit: $limit) {
	  id
      mission_name
      launch_year
      launch_site {
        site_name
      }
      launch_date_local
      links {
        video_link
      }
    }
  }
`;