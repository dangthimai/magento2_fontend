<?php
namespace Tigren\Newmodule\Model\Config\Source;

use Magento\Eav\Model\Entity\Attribute\Source\AbstractSource;

class StatusOptions extends AbstractSource
{
    /**
     * Get all options
     *
     * @return array
     */
    public function getAllOptions()
    {
        if (null === $this->_options) {
            $this->_options=[
                ['label' => __('Asus'), 'value' => 'Asus'],
                ['label' => __('Dell'), 'value' => 'Dell'],
                ['label' => __('HP'), 'value' => 'HP'],
                ['label' => __('Apple'), 'value' => 'Apple'],
                ['label' => __('Software'), 'value' => 'Software'],
                ['label' => __('Hardware'), 'value' => 'Hardware'],
            ];
        }
        return $this->_options;
    }
}