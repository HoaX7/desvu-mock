import { CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryColumn("uuid")
    	id: string;
    
    @DeleteDateColumn({
    	type: "timestamptz",
    	nullable: true,
    	name: "deleted_at"
    })
    	deletedAt?: Date;
    @CreateDateColumn({
    	type: "timestamptz",
    	default: () => "CURRENT_TIMESTAMP",
    	name: "created_at"
    })
    	createdAt: Date;

    @UpdateDateColumn({
    	type: "timestamptz",
    	default: () => "CURRENT_TIMESTAMP",
    	name: "updated_at"
    })
    	updatedAt: Date;
}