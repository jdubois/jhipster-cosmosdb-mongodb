package io.github.jdubois.jhipstercosmos.repository;

import io.github.jdubois.jhipstercosmos.domain.Label;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data MongoDB repository for the Label entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LabelRepository extends MongoRepository<Label, String> {

}
