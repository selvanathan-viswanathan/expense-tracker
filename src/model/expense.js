import mongoose from 'mongoose';
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';

const expenseSchema = new mongoose.Schema({
    billsAttached: {
        type: [String],
    },
    amount: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    currencyId: {
        type: Schema.Types.ObjectId,
        ref: 'Currency'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: String,
        default: 'self'
    },
    createdBy: {
        type: String,
        default: 'self'
    }
});

expenseSchema.pre("save", function clientPreSaveHook(next) {
    this.clientId = uuidv4();
    this.clientSecret = uuidv6();
    next();
});
const ExpenseModel = mongoose.model("ExpenseModel", expenseSchema);

export default ExpenseModel;