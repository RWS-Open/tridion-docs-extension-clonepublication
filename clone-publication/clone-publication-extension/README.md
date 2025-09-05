# RWS Tridion Docs Clone Publication Extension

## Frontend extension

### Requirements

- Access to **[RWS](https://www.rws.com) Tridion Docs 15.1 environment** 
- Backend Extension **[releases](https://github.com/mshiva452/tridion-docs-extension-clonepublication?tab=readme-ov-file#backend-extension)**
- **Node.js (Latest LTS version recommended)**


### Installation

1. Navigate to the clone-publication-extension folder.
2. Install the required dependencies:
   
   npm install
  

### ⚙️ Configuration

1. Open the package.json file.
2. Update the target server URL in the dev script to point to your Tridion Docs Organize Space:

  ```json

     "dev": "webpack serve --config ./webpack.dev.config.js --progress --env target=https://domain.com manifest=../manifest.json config=../clone-publication.config",

  ```

3. Login to **Access Management** and configure redirect URLs:
   - Go to the **Applications** tab.
   - Go to Tridion Docs Organize Space details
   - Click Edit on your application.
   - Add the following under "Allowed Redirect URLs":
        
        https://localhost:3010/ISHCS/OrganizeSpace/signin-oidc

        https://localhost:3010/ISHCS/OrganizeSpace/signout-callback-oidc

   - Click Save


### Run Locally

1. Navigate to clone-publication-extension folder
   
2. Start the local development server:
  
    npm run dev

3. Access the extension at:
   
    https://localhost:3010/ISHCS/OrganizeSpace
    

### Build & Deployment

     
1. Navigate to clone-publication-extension folder
   
2. Build the extension:
   
    npm run build

3. Package the extension:
 
    npm run pack

4. Copy the following files to the Tridion Docs Add-ons repository directory(\Docs\InfoShare\Data\Addons\Repository):
   
        clone-publication.zip

        clone-publication.config
	

### Usage

1. Login to Tridion Docs **Organize** Space.
   
2. Create a new folder in the **Structured Content** tree view and set content type as **Publication** where the cloned publication should be created.
   
3. Navigate to the publication you want to clone, select it, and click the **Clone Publication** button.
   
4. A modal window will appear prompting you to select the target folder.
   
5. Choose the target folder and click **Clone Publication.**
   
6. Upon successful cloning, a success notification message will appear.
   
7. Refresh the target folder to view the newly cloned publication.