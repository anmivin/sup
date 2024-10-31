import { AxiosRequestConfig } from 'axios';

import { components } from '@api/Api';

import { PUBLIC_BUCKET_NAMES } from '@type/enums';

export interface ImageUploadProps {
  onImageAdd: (
    payload: components['schemas']['Debug'],
    type: string,
    config?: AxiosRequestConfig,
  ) => Promise<components['schemas']['FileResponseDTO'] | undefined>;
  value: string | null;
  type: PUBLIC_BUCKET_NAMES;
}
