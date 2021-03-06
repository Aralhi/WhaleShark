import mongoose = require('mongoose');

interface OrderModel extends mongoose.Document {
  name: string;
  no: string;
  subject: string;
  status: string;
  progress: number;
  userId: string;
  customer: {
    name: string;
    carNumber: string;
    phone: string;
    carType: string;
    company: string;
    remark: string;
  };
  subjectsCost: number;
  materialsCost: number;
  orderCost: number;
  assignStaffs: [{
    _id: string;
    name: string;
    group: string;
    phone: string;
    address: string;
    remark: string;
  }];
  assignDate: Date;
  repairSubjects: [
    {
      id: number;
      name: string;
      code: string;
      staff: string;
      cost: number;
      costUnit: string;
    }
  ];
  repairMaterials: [
    {
      id: number;
      name: string;
      code: string;
      spec: string;
      count: number;
      costUnit: string;
      outPrice: number;
      unit: string;
    }
  ];
}
export = OrderModel;
