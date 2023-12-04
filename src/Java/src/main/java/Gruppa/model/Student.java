package Gruppa.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gruppa.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Студент
 */
@Entity(name = "IISGruppaСтудент")
@Table(schema = "public", name = "Студент")
public class Student {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gruppa")
    @Convert("Gruppa")
    @Column(name = "Группа", length = 16, unique = true, nullable = false)
    private UUID _gruppaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gruppa", insertable = false, updatable = false)
    private Gruppa gruppa;


    public Student() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }


}