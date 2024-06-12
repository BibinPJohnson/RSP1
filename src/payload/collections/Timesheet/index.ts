import type { CollectionConfig } from 'payload/types';
import { checkRole } from '../Users/checkRole';

const Timesheet: CollectionConfig = {
  slug: 'timesheet',
  admin: {
    useAsTitle: 'internal_id',
    defaultColumns: [
      'internal_id',
      'employee_id',
      'project_id',
      'iscomplete',
      'hours_worked',
      'created_by',
      'modified_by',
      'weeklyhours',
      'is_deleted',
      'approvalstatus',
      'ns_internal_id',
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
      unique: true,
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'employee_id',
      type: 'number',
      required: true,
    },
    {
      name: 'project_id',
      type: 'number',
      required: true,
    },
    {
      name: 'iscomplete',
      type: 'checkbox',
    },
    {
      name: 'hours_worked',
      type: 'number',
      required: true,
    },
    {
      name: 'created_by',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'modified_by',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'weeklyhours',
      type: 'number',
      required: true,
    },
    {
      name: 'is_deleted',
      type: 'checkbox',
    },
    {
      name: 'approvalstatus',
      type: 'text',
      maxLength: 200,
    },
    {
      name: 'ns_internal_id',
      type: 'number',
      label:"Project ID",
      required: true,
    },
  ],
  timestamps: true,
};

export default Timesheet;
