const { Model } = require('sequelize');
const db = require('../db');
const {
  categorySchema,
  orderSchema,
  serviceSchema,
  userSchema,
  countrySchema,
} = require('./schemas');

class User extends Model {}
User.init(userSchema, { sequelize: db, modelName: 'user' });

class DeletedUser extends Model {}
User.init(userSchema, { sequelize: db, modelName: 'deleted_user' });

class Order extends Model {}
Order.init(orderSchema, { sequelize: db, modelName: 'order' });

class DeletedOrder extends Model {}
Order.init(orderSchema, { sequelize: db, modelName: 'deleted_order' });

class Service extends Model {}
Service.init(serviceSchema, { sequelize: db, modelName: 'service' });

class DeletedService extends Model {}
Service.init(serviceSchema, { sequelize: db, modelName: 'deleted_service' });

class Category extends Model {}
Category.init(categorySchema, { sequelize: db, modelName: 'category' });

class DeletedCategory extends Model {}
DeletedCategory.init(categorySchema, {
  sequelize: db,
  modelName: 'deleted_category',
});

class Country extends Model {}
Country.init(countrySchema, { sequelize: db, modelName: 'country' });

class DeletedCountry extends Model {}
DeletedCountry.init(countrySchema, {
  sequelize: db,
  modelName: 'deleted_country',
});

module.exports = {
  User,
  DeletedUser,
  Order,
  DeletedOrder,
  Service,
  DeletedService,
  Category,
  DeletedCategory,
  Country,
  DeletedCountry,
};
