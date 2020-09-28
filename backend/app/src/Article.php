<?php

namespace Stageverslag\test;

// use Stageverslag\test\HomePage;
use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;

class Article extends DataObject {

    private static $db = [
        'Title' => 'Varchar',
        'Content' => 'HTMLText'
    ];

    private static $has_one = [
        'HomePage' => HomePage::class
    ];

    // /**
    //  * CMS Fields
    //  * @return FieldList
    //  */
    public function getCMSFields()
    {
        // $fields = parent::getCMSFields();
        $fields = FieldList::create(
            TextField::create('Title', 'Title'),
            HtmlEditorField::create('Content', 'Content')
        );

        return $fields;
    }
}