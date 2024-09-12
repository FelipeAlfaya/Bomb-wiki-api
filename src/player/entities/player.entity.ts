import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

@Entity()
export class Player {
  @PrimaryColumn()
  @Generated('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  guild: string | null;

  @Column()
  nationality: string | null;

  @Column()
  sector: string | null;

  @Column()
  playstyle: string;

  @Column()
  alignment: string | null;

  @Column()
  Flexibility: number;

  @Column()
  Speed: number;

  @Column()
  Aim: number;

  @Column()
  ACC: number;

  @Column()
  ADP: number;

  @Column()
  PS: number;

  @Column()
  overall: number;

  @Column()
  OBS?: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  @BeforeUpdate()
  beforeUpdateActions() {
    this.updated_at = new Date();
  }
}
