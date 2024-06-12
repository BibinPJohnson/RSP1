import type { CollectionConfig } from 'payload/types';
import { checkRole } from '../Users/checkRole';

const Non_Working_Days: CollectionConfig = {
  slug: 'non_working_days',
  admin: {
    useAsTitle: 'description',
    defaultColumns: [
      'internal_id',
      'date',
      'description',
      'reason',
      'created_by',
      'modified_by',
      'is_deleted',
    ],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
    admin: ({ req: { user } }) => checkRole(['admin', 'user', 'supervisor'], user),
  },
  fields: [
    {
      name: 'internal_id',
      type: 'number',
      label: 'NetSuite ID',
      required: true,
      unique: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'holiday',
      type: 'text',
      label: 'Holiday Name:',
      maxLength: 255,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      maxLength: 255,
    },
    {
      name: 'reason',
      type: 'text',
      maxLength: 255,
    },
    {
      name: 'created_by',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'modified_by',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'is_deleted',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  timestamps: true,
};

export default Non_Working_Days;
