const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        married: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "members3",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  // 연관 관계 설정 메서드 (현재 비어 있음)
  static associate(db) {
    //User.hasMany(Comment)
    // db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
    // db.User.hasMany(db.Comment);
    db.User.hasMany(db.Comment, {
      foreignKey: "commenter", // Comment 모델에서 사용한 이름과 동일하게
    });
  }
}
module.exports = User;
