import { useCallback, useMemo } from 'react';
import { useNotification, useFolderSelector, Folder, DocumentObject, ReadonlyHierarchy, ExplorerActionExtensionHookConfiguration, MessageSeverity } from '@tridion-docs/extensions';
import axios from 'axios';

interface IClonePublication {
    _publicationId: string;
    _oldFolderId: string;
    _newFolderId: string
}
export const useClonePublication = ({ selectedItems, contextFolder }: ExplorerActionExtensionHookConfiguration) => {
    const { execute: showNotification } = useNotification();
    const folderSelectorProps = {
        onOk: async (folder: Folder) => {
            if (folder.baseFolder === "none" && folder.folderType === "folder") {
                console.log('selected', folder);
                console.log(selectedItems, contextFolder);
                const selectedItem = selectedItems[0] as DocumentObject
                const data = {
                    "_publicationId": selectedItem.logicalId,
                    "_oldFolderId": contextFolder?.id,
                    "_newFolderId": folder.id
                }
                clonePublication(data as IClonePublication);
            } else {
                showNotification({
                    description: `Failed to clone the Publication. Please select the folder with content type set to NONE.`,
                    severity: MessageSeverity.ERROR,
                    message: ""
                })
            }
        },
        getDisabledFolderIds: (_hierarchy: ReadonlyHierarchy, _sourceFolderId: string) => {
            return [];
        },
        showConstraints: false,
        constraintsComponent: () => <></>,
        modalIcon: <div />,
        modalTitle: 'Select Clone Folder',
        okButtonLabel: 'Clone Publication',
        cancelButtonLabel: 'Cancel',
    };

    const { execute: showFolderSelector } = useFolderSelector(folderSelectorProps);
    const execute = useCallback(async () => {
        await showFolderSelector()
    }, [selectedItems, contextFolder]);

    const clonePublication = async (cloneData: IClonePublication) => {
        try {
            const url = "/ISHCS/OrganizeSpace/Extensions/ClonePublication/CopyPublication";
            const response = await axios.post(url, cloneData);
            if (response.status === 200) {
                showNotification({
                    description: `Publication ${response.data.newPublicationGUID} cloned successfully.`,
                    severity: MessageSeverity.SUCCESS,
                    message: ""
                })
            }
        } catch (error) {
            console.log(error)
            showNotification({
                description: `Failed to clone the Publication.`,
                severity: MessageSeverity.ERROR,
                message: ""
            })
        }
    }
    const isAvailable = useMemo(() => true, []);

    return {
        isAvailable,
        execute,
    };
};
