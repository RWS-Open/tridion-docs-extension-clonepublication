# RWS Tridion Docs Clone Publication Extension

## Backend Extension

### Requirements

- **Visual Studio 2022**
- **.NET 8.0**
- Access to **[RWS](https://www.rws.com) Tridion Docs environment 15.1** 
- Setup **[Frontend Extension](https://github.com/RWS-Open/tridion-docs-extension-clonepublication?tab=readme-ov-file#frontend-extension)**

### Build Instructions

1. Open the solution in **Visual Studio 2022**.

2. Build the project targeting **.NET 8.0**.


### Deployment

1. Navigate to folder RWS.BackendExtension.ClonePublication\package  
	 
2. Copy the RWS.BackendExtension.ClonePublication.zip file to Tridion Docs Add-ons repository folder (Docs Installation location)
	\Docs\InfoShare\Data\Addons\Repository\
 
### Usage

1) Login to Tridion Docs Organize Space.
2) Create a new folder in Structured Content tree view for publication to clone.
3) Navigate to the publication and select a single publication that needs to be cloned and click on clone publication button.
4) On clicking of clone publication, you will get a pop up to select the target folder.
5) Select the target folder and click clone publication button.
6) After clone publication is done success notification message will be shown.
7) Refresh the target publication folder to the see the cloned publication.