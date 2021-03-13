import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class RemoveNameFromOrdersTable1615671001987
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('orders', 'name');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'orders',
      new TableColumn({
        name: 'name',
        type: 'varchar',
      }),
    );
  }
}
