/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { MouseEventHandler } from 'react';

import { _t } from '../../../../../languageHandler';
import AccessibleButton from '../../../elements/AccessibleButton';

interface EditionButtonsProps {
    onCancelClick: MouseEventHandler<HTMLButtonElement>;
    onSaveClick: MouseEventHandler<HTMLButtonElement>;
    isSaveDisabled?: boolean;
}

export function EditionButtons({ onCancelClick, onSaveClick, isSaveDisabled = false }: EditionButtonsProps) {
    return <div className="mx_EditMessageComposer_buttons">
        <AccessibleButton kind="secondary" onClick={onCancelClick}>
            { _t("Cancel") }
        </AccessibleButton>
        <AccessibleButton kind="primary" onClick={onSaveClick} disabled={isSaveDisabled}>
            { _t("Save") }
        </AccessibleButton>
    </div>;
}
