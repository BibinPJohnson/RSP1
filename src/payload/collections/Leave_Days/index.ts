import type { CollectionConfig } from 'payload/types';
import { checkRole } from '../Users/checkRole';

const Leave_Days: CollectionConfig = {
  slug: 'leave_days',
  admin: {
    useAsTitle: 'internal_id',
    defaultColumns: [
      'internal_id',
      'date',
      'reason',
      'number_of_days',
      'employee',
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
      required: true,
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'reason',
      type: 'text',
      maxLength: 255,
      required: true,
    },
    {
      name: 'number_of_days',
      type: 'number',
      required: true,
    },
    {
      name: 'employee',
      type: 'number',
      required: true,
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
    },
  ],
  timestamps: true,
};

export default Leave_Days;
