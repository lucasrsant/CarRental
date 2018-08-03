import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Car {

    @PrimaryColumn({type: "text", length: 8})
    plate: string = "";

    @Column("text")
    model: string = "";
    
    @Column("text")
    manufacturer: string = "";

    @Column("text")
    color: string = "";
}