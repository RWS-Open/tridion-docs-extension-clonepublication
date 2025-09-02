import type { ExtensionModule, RuntimeInformation } from '@tridion-docs/extensions';

import '../theme/_variables.css';

import packageJson from '../package.json';
import { useClonePublication } from './useClonePublication';
import { ClonePublicationIcon } from './ClonePublicationIcon';
import { ExplorerActionExtensionVisibilityConfiguration, ExplorerActionExtensionConfiguration, FolderType } from '@tridion-docs/extensions';

import { initializeGlobals } from './globals';

const extensionModule: ExtensionModule = {
    runtimeInfo: packageJson as RuntimeInformation,
    initializeGlobals,
    initialize: builder => {
        builder.action.addExplorerAction(() => ({
            id: 'explore-clone-publication',
            label: 'Clone Publication',
            tooltip: 'Clone Publication',
            isVisible: (props: ExplorerActionExtensionVisibilityConfiguration): boolean => {
                return props.activeView === "Explore" && props.contextFolder?.folderType === FolderType.PublicationFolder
            },
            icon: ClonePublicationIcon,
            hook: useClonePublication,
        }));
    },
};

export default extensionModule;
