import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import faceSensingIconURL from './faceSensing/face-sensing.svg';
import faceSensingInsetIconURL from './faceSensing/face-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import customExtensionIcon from './custom/custom.svg';
import galleryIcon from './gallery/gallery.svg';
import {APP_NAME} from '../../brand';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Face Sensing"
                description="Name for the 'Face Sensing' extension"
                id="tw.extension.faceSensing.name"
            />
        ),
        extensionId: 'faceSensing',
        extensionURL: 'https://extensions.turbowarp.org/lab/face-sensing.js',
        iconURL: faceSensingIconURL,
        insetIconURL: faceSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense faces with the camera."
                description="Description for the 'Face Sensing' extension"
                id="tw.extension.faceSensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: 'custom_extension',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        tags: ['mcm'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    }
];

export const galleryLoading = {
    name: (
        <FormattedMessage
            defaultMessage="{APP_NAME} Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Loading extension gallery..."
            description="Appears while loading extension list from the custom extension gallery"
            id="tw.extensionGallery.loading"
        />
    ),
    tags: ['tw'],
    featured: true
};

export const galleryMore = {
    name: (
        <FormattedMessage
            defaultMessage="{APP_NAME} Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Learn more about extensions at extensions.turbowarp.org."
            description="Appears after the extension list from the gallery was loaded successfully"
            id="tw.extensionGallery.more"
        />
    ),
    tags: ['tw'],
    featured: true
};

export const galleryError = {
    name: (
        <FormattedMessage
            defaultMessage="{APP_NAME} is a fan-made mod"
            description="Name of extensions.turbowarp.org in extension library"
            id="mcm.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Made off of a scratch mod named Turbowarp"
            description="Appears when an error occurred loading extension list from the custom extension gallery"
            id="mcm.extensionGallery.error"
        />
    ),
    tags: ['mcm'],
    featured: true
};
