# RWS Tridion Docs Clone Publication Extension

## Overview

The **RWS Tridion Docs Clone Publication Extension** is a Tridion Docs extension that enables you to duplicate an entire publication with a single action. This helps in scenarios where you need to replicate an existing publication structure quickly without manual effort.

## Features

- Clone the entire publication including structure and content.
- Seamless integration with [RWS](https://www.rws.com) Tridion Docs.
- Easy to deploy and maintain.

## Requirements

- Access to an **[RWS](https://www.rws.com) Tridion Docs 15.1 environment** 

## Backend Extension

### Deployment

1. Download the backend extension ZIP file(RWS.BackendExtension.ClonePublication-1.0.0.zip) from [releases](https://github.com/RWS-Open/tridion-docs-extension-clonepublication/releases) page.
	
2. Copy the downloaded ZIP file to the Tridion Docs Add-ons repository directory(Tridion Docs Installation path):  
   
   Directory path:

	\Docs\InfoShare\Data\Addons\Repository\
   

## Frontend Extension

### Deployment

1. Download the frontend extension ZIP file(clone-publication-1.0.0-frontend.zip) from the [releases](https://github.com/RWS-Open/tridion-docs-extension-clonepublication/releases) page.
   
2. Unzip the clone-publication-1.0.0-frontend.zip file.
   
3. Copy the following files to the Tridion Docs Add-ons repository:  
   
        - clone-publication.zip
        - clone-publication.config
  
    Directory path:

	\Docs\InfoShare\Data\Addons\Repository\

### Usage

1. Login to Tridion Docs **Organize** Space.
   
2. Create a new folder in the **Structured Content** tree view and set content type as **Publication** where the cloned publication should be created.
   
3. Navigate to the publication you want to clone, select it, and click the **Clone Publication** button.
   
4. A modal window will appear prompting you to select the target folder.
   
5. Choose the target folder and click **Clone Publication.**
   
6. Upon successful cloning, a success notification message will appear.
   
7. Refresh the target folder to view the newly cloned publication.