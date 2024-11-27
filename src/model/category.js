import * as mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    isDefault: {
        type: String,
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

categorySchema.pre('save', function categorySchemaPreSaveHook(next){
    this.updatedAt(Date.now());
    next();
});
const CategoryModel = mongoose.model("CategoryModel", categorySchemaSchema);

export default CategoryModel;