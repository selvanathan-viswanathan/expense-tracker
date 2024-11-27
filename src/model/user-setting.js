import * as mongoose from 'mongoose';
const currencySchema = new mongoose.Schema({
    currencyId: {
        type: Schema.Types.ObjectId,
        ref: 'Currency'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
    },
});

currencySchema.pre('save', function currencySchemaPreSaveHook(next){
    this.updatedAt(Date.now());
    next();
});
const CurrencyModel = mongoose.model("CurrencyModel", currencySchema);

export default CurrencyModel;