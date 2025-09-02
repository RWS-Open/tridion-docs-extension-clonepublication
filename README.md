# RWS Tridion Docs Clone Publication Extension

## Overview

The **RWS Tridion Docs Clone Publication Extension** is a Tridion Docs extension that enables you to duplicate an entire publication with a single action. This helps in scenarios where you need to replicate an existing publication structure quickly without manual effort.

## Features

- Clone the entire publication including structure and content.
- Seamless integration with [RWS](https://www.rws.com) Tridion Docs.
- Easy to deploy and maintain.

## Backend Extension


### Requirements

- **Visual Studio 2022**
- **.NET 8.0 Framework**
- Access to **[RWS](https://www.rws.com) Tridion Docs environment 15.1** 


### Build Instructions

1. Open the solution in **Visual Studio 2022**.
2. Build the project targeting **.NET 8.0**.

### Deployment

1. Locate the packaged extension:  
	RWS.BackendExtension.ClonePublication\package\RWS.BackendExtension.ClonePublication.zip
	
2. Copy the zip file to the Tridion Docs Add-ons repository:  
	\Docs\InfoShare\Data\Addons\Repository\
   

## Frontend Extension


### Requirements

- **Nodejs Latest**


### Installation

 - Navigate to clone-publication-extension folder
 - Install Node Modules by running the following command
   - npm install
  

### ⚙️ Configure

 - Update the package.json file to update the Target server url as below
     - target = https://domain.com (Tridion Docs Organize Space url)

  ```json

     "dev": "webpack serve --config ./webpack.dev.config.js --progress --env target=https://domain.com manifest=../manifest.json config=../clone-publication.config",

  ```

 - Login to Access Management 
   - Applications Tab
   - Click on Edit button to enter the Allowed redirect URLs as below
       - https://localhost:3010/.../signin-oidc
       - https://localhost:3010/.../signout-callback-oidc
   - Click Save


### Run Locally

1) Navigate to clone-publication-extension folder
2) Run the command npm run dev to run the extension locally
   - npm run dev
3) Extension can be accessed using the below URL
    https://localhost:3010/ISHCS/OrganizeSpace
    

### Build & Deploy

1) Navigate to clone-publication-extension folder
2) Run the command npm run build to build the packege
    - npm run build    
3) Run the command npm run pack to create deployable zip for the extension 
    - npm run pack
4)  Copy the zip file and config file to the Tridion Docs Add-ons repository:  
        - clone-publication.zip
        - clone-publication.config
	\Docs\InfoShare\Data\Addons\Repository\

### Usage

1) Login to Tridion Docs Organize Space.
2) Create a new folder in Structured Content tree view for publication to clone.
3) Navigate to the publication and select a single publication that needs to be cloned and click on clone publication button.
4) On clicking of clone publication, you will get a pop up to select the target folder.
5) Select the target folder and click clone publication button.
6) After clone publication is done success notification message will be shown.
7) Refresh the target publication folder to the see the cloned publication.